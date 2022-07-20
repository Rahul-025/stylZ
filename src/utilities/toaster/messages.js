const GetMessage = (message, productSubtitle = null) => {
  if (message === "auth/wrong-password" || message === "auth/user-not-found") {
    return "Invalid Credentials !";
  } else if (message === "auth/email-already-in-use") {
    return "Email is already registered! Please sign up with diffrent email.";
  } else if (message === "email-req") {
    return "Email is required !";
  } else if (message === "password-req") {
    return "Password is required !";
  } else if (message === "auth/invalid-email") {
    return "Please enter a valid email address";
  } else if (message === "addItemToCart") {
    return `${productSubtitle} added to cart.`;
  }
};

export default GetMessage;
