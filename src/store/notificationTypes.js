import i18n from '@/lang/i18n';

export const NOTIFICATION_UPDATE = {
  success: {
    title: i18n.t('notification.titleSuccess'),
    text: i18n.t('notification.updatePdfSuccess'),
  },
  error: {
    title: i18n.t('notification.titleError'),
    text: i18n.t('notification.updatePdfError'),
  },
};

export const NOTIFICATION_UPLOAD = {
  success: {
    title: i18n.t('notification.titleSuccess'),
    text: i18n.t('notification.uploadPdfSuccess'),
  },
  error: {
    title: i18n.t('notification.titleError'),
    text: i18n.t('notification.uploadPdfError'),
  },
};

export const NOTIFICATION_LOGIN = {
  success: {},
  error: {
    title: i18n.t('notification.titleError'),
    text: i18n.t('notification.loginError'),
  },
};
