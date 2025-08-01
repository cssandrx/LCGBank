const form = document.getElementById('registerForm');
if (form) {
  const pwdInput = form.password;
  const emailInput = form.email;
  const contactInput = form.contact;

  pwdInput.addEventListener('input', () => {
    const pinPattern = /^\d{4,8}$/;
    pwdInput.setCustomValidity(
      pinPattern.test(pwdInput.value)
        ? ''
        : 'PIN must be 4–8 digits.'
    );
  });

  contactInput.addEventListener('input', () => {
    const phonePattern = /^\d{10}$/;
    contactInput.setCustomValidity(
      phonePattern.test(contactInput.value)
        ? ''
        : 'Enter a valid 10-digit contact number.'
    );
  });

  form.addEventListener('submit', function(e) {
    let valid = true;

    pwdInput.setCustomValidity('');
    emailInput.setCustomValidity('');
    contactInput.setCustomValidity('');

    if (!/^\d{4,8}$/.test(pwdInput.value)) {
      pwdInput.setCustomValidity('PIN must be 4–8 digits.');
      valid = false;
    }
    if (!emailInput.checkValidity()) {
      emailInput.setCustomValidity('Please enter a valid email address.');
      valid = false;
    }
    if (!/^\d{10}$/.test(contactInput.value)) {
      contactInput.setCustomValidity('Enter a valid 10-digit contact number.');
      valid = false;
    }

    if (!valid) {
      form.reportValidity();
      e.preventDefault();
    } else {
      e.preventDefault();
      window.location.href = 'login.html';
    }
  });
}

const txnForm = document.getElementById('transactionForm');
if (txnForm) {
  txnForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const recipient = txnForm.recipient;
    const amount = txnForm.amount;

    recipient.setCustomValidity('');
    amount.setCustomValidity('');

    let valid = true;

    if (!/^\d{10,18}$/.test(recipient.value)) {
      recipient.setCustomValidity('Account number must be 10–18 digits.');
      valid = false;
    }
    if (Number(amount.value) <= 0) {
      amount.setCustomValidity('Please enter an amount greater than zero.');
      valid = false;
    }

    if (!valid) {
      txnForm.reportValidity();
    } else {
      alert(`✅ Transfer successful! ₱${parseFloat(amount.value).toFixed(2)} sent to ${recipient.value}`);
      window.location.href = 'transaction-success.html';
    }
  });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    const email = loginForm.email;
    const pin = loginForm.password;

    if (!email.checkValidity() || !pin.checkValidity()) {
      return;
    }

    e.preventDefault();

    window.location.href = 'Dipo.html';
  });
}
