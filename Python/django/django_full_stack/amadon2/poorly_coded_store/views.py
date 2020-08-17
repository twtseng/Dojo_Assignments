from django.shortcuts import render, redirect
from .models import Order, Product

def index(request):
    context = {
        "all_products": Product.objects.all()
    }
    return render(request, "store/index.html", context)

def checkout(request):
    quantity_from_form = int(request.POST["quantity"])
    product_id_from_form = int(request.POST["product_id"])
    #price_from_form = float(request.POST["price"])
    price_from_db = Product.objects.get(id = product_id_from_form).price
    total_charge = quantity_from_form * price_from_db
    print("Charging credit card...")
    Order.objects.create(quantity_ordered=quantity_from_form, total_price=total_charge)
    return redirect("/checkout_form")

def checkout_form(request):
    context = {
        "orders": Order.objects.all()
    }
    return render(request, "store/checkout.html", context)    