
document.addEventListener('DOMContentLoaded', function () {
    const paymentInputs = document.querySelectorAll('.payment-input');
    const payNowContainer = document.getElementById('pay-now-container');
    const payNowButton = document.getElementById('pay-now');

    paymentInputs.forEach(input => {
        input.addEventListener('change', function () {
            if (document.querySelector('input[name="payment"]:checked')) {
                payNowContainer.style.display = 'block';
            } else {
                payNowContainer.style.display = 'none';
            }
        });
    });

    payNowButton.addEventListener('click', function () {
        alert('Payment Completed');
       
    });
});
document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', () => {
        document.getElementById('pay-now-container').style.display = 'block';
    });
});
