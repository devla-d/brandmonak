from django.shortcuts import render, redirect

# from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib import messages

# from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.template.loader import get_template
from django.conf import settings

# Create your views here.


EMAIL_ADMIN = settings.DEFAULT_FROM_EMAIL


def index(request):
    return render(request, "index.html")


def contact_(request):
    return render(request, "contact.html")


@csrf_exempt
def send_message(request):
    if request.POST:
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        body = request.POST.get("message")

        # stat = send_mail(subject, body, ADMIN_MAIL, [email], fail_silently=False)
        # print(stat)

        context = {"email": email, "name": name, "body": body}
        # print(context)
        message = get_template("email.html").render(context)
        mail = EmailMessage(
            subject=subject,
            body=message,
            from_email=email,
            to=[EMAIL_ADMIN],
            reply_to=[email],
        )
        mail.content_subtype = "html"
        mail.send(fail_silently=True)

        messages.success(request, "Email sent")

        return redirect("contact")

    else:

        messages.warning(request, "GET REQUEST NOT ACCEPTED")
        return redirect("contact")
