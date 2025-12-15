//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const messages = message.trim();
  const isque = messages.endsWith('?');
  const hasletter = /[a-zA-Z]/.test(messages);
  const isYelling = hasletter && messages === messages.toUpperCase();

  if (messages === "") {
    return "Fine. Be that way!";
  }
  if (isque && isYelling) {
    return "Calm down, I know what I'm doing!";
  }
  if (isYelling) {
    return "Whoa, chill out!";
  }
  if (isque) {
    return "Sure.";
  }
    return "Whatever.";
};
