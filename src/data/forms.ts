export const leadFormDefaults = {
  submitLabel: "Отправить заявку",
  successTitle: "Заявка принята",
  successMessage:
    "Спасибо. Мы получили вашу заявку в интерфейсе сайта. Реальная отправка будет подключена при интеграции backend.",
};

export const leadFormFields = {
  name: {
    label: "Имя",
    placeholder: "Как к вам обращаться",
    requiredMessage: "Укажите имя",
  },
  contact: {
    label: "Телефон или мессенджер",
    placeholder: "+7 или ник в мессенджере",
    requiredMessage: "Укажите телефон или мессенджер для связи",
    minLengthMessage: "Контакт должен быть не короче 5 символов",
  },
  comment: {
    label: "Комментарий",
    placeholder: "Коротко опишите задачу",
  },
};
