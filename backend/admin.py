from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Route, LoggedUser, Ticket, NewsLetter, SystemInfo, Contact
from django.utils.translation import ngettext
from django.contrib import messages
import logging
from django.contrib.admin.models import LogEntry, DELETION
from django.utils.html import escape
from django.urls import reverse
from django.utils.safestring import mark_safe

logging.disable(logging.NOTSET)
admin.site.unregister(Group)
class RouteAdmin(admin.ModelAdmin):
    list_display = ('name', 'departureLocation', 'destinationLocation', 'price', 'departureDate', 'departureTime','arrivalTime' ,'vehicleID')
    search_fields = ('name', 'departureLocation', 'destinationLocation')
admin.site.register(Route,RouteAdmin)

class LoggedAdmin(admin.ModelAdmin):
    list = ('username')
    admin.site.register(LoggedUser)

class TicketAdmin(admin.ModelAdmin):
    list_display = ('username','routeId','bookedSeat1','bookedSeat2','payment','amount', 'destinationLocation','departureLocation','arrivalTime','departureTime','departureDate','vehicleID')
    ordering = ('amount','departureDate','arrivalTime')
    search_fields = ('username','vehicleID','departureLocation','destinationLocation')
admin.site.register(Ticket,TicketAdmin)

class NewsLetterAdmin(admin.ModelAdmin):
    list = ('email')
admin.site.register(NewsLetter,NewsLetterAdmin)

class SystemInfoAdmin(admin.ModelAdmin):
    list = ('about','weblink')
    admin.site.register(SystemInfo)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name','email','message','status')
    list_filter = ('name',)
    actions= ['make_replied','make_read','make_unread']

    @admin.action(description='Mark selected as Replied')
    def make_replied(self, request, queryset):
        updated = queryset.update(status='replied')
        self.message_user(request, ngettext(
            '%d message was successfully marked as replied.',
            '%d messages were successfully marked as replied.',
            updated,
        ) % updated, messages.SUCCESS)

    @admin.action(description='Mark selected as Read')
    def make_read(self, request, queryset):
        updated = queryset.update(status='read')
        self.message_user(request, ngettext(
            '%d message was successfully marked as read.',
            '%d messages were successfully marked as read.',
            updated,
        ) % updated, messages.SUCCESS)
    
    @admin.action(description='Mark selected as Unread')
    def make_unread(self, request, queryset):
        updated = queryset.update(status='unread')
        self.message_user(request, ngettext(
            '%d message was successfully marked as unread.',
            '%d messages were successfully marked as unread.',
            updated,
        ) % updated, messages.SUCCESS)

admin.site.register(Contact,ContactAdmin)


class LogEntryAdmin(admin.ModelAdmin):
    date_hierarchy = 'action_time'

    list_filter = [
        'user',
        'content_type',
        'action_flag'
    ]

    search_fields = [
        'object_repr',
        'change_message'
    ]

    list_display = [
        'action_time',
        'user',
        'content_type',
        'object_link',
        'action_flag',
    ]

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_view_permission(self, request, obj=None):
        return request.user.is_superuser

    def object_link(self, obj):
        if obj.action_flag == DELETION:
            link = escape(obj.object_repr)
        else:
            ct = obj.content_type
            link = '<a href="%s">%s</a>' % (
                reverse('admin:%s_%s_change' % (ct.app_label, ct.model), args=[obj.object_id]),
                escape(obj.object_repr),
            )
        return mark_safe(link)
    object_link.admin_order_field = "object_repr"
    object_link.short_description = "object"

admin.site.register(LogEntry, LogEntryAdmin)