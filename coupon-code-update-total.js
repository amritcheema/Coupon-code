var discountedValue;
var actualValue;
var extraActualValue;
var extraDiscountedValue;
$("input[name='item_meta[4562]']").focusin(function() {
  actualValue = $('#field_cb4smz422').val(); //Actual value of safari cost field
  extraActualValue = $('#field_wo1mv').val(); //Actual value of Landrover exclusive/hatch price field
  console.log(extraActualValue);
});

$("input[name='item_meta[4562]']").change(function() {

  setTimeout(function() {

    discountedValue = $('#field_cb4smz422').val(); //discounted value of safari cost field
    extraDiscountedValue = $('#field_wo1mv').val(); //discounted value of Landrover exclusive/hatch price field

    var couponDiscount = actualValue-discountedValue;
    var extraCouponDiscount = extraActualValue-extraDiscountedValue;

    console.log(extraCouponDiscount);
    
    //Booking discount amount
    if(couponDiscount==0) {
      $('#field_js86k7422').val(extraCouponDiscount);
    } else {
      $('#field_js86k7422').val(couponDiscount);
    }

    //Safari subtotal(only for safari discount)
    var safariSubtotal = $('#field_57mrz6642').val();
    if(couponDiscount!=0) {
      $('#field_57mrz6642').val(safariSubtotal-couponDiscount);
    }

    //Extra Subtotal(only for landrover discount)
    var safariSubtotal = $('#field_78i0ri642').val();
    if(extraCouponDiscount!=0) {
      $('#field_78i0ri642').val(safariSubtotal-extraCouponDiscount);
    }

    //Total Safari cost
    var totalSafariCost = $('#field_hlbk8642').val();
    if(couponDiscount==0) {
      $('#field_hlbk8642').val(totalSafariCost-extraCouponDiscount);
    } else {
      $('#field_hlbk8642').val(totalSafariCost-couponDiscount);
    }

    //Total remaining
    var totalRemaining = $('#field_hjw21s642').val();
    if(couponDiscount==0) {
      $('#field_hjw21s642').val(totalRemaining-extraCouponDiscount);
    } else {
      $('#field_hjw21s642').val(totalRemaining-couponDiscount);
    }

    //cost per person per day
    var costPp = $('#field_8ggcj22').val();
    if(couponDiscount==0) {
      $('#field_8ggcj22').val(costPp-extraCouponDiscount); 
    } else {
      $('#field_8ggcj22').val(costPp-couponDiscount); 
    }

  },3000);

});