import { defineMessages } from "@discord/intl";

export const meta = {
  translationsPath: "./translations",
  secret: false,
  translate: true,
};

export default defineMessages({
  EDITMESSAGEATTACHMENTS_COUNT_ATTACHMENTS:
    "{count, plural, =1 {# attachment} other {# attachments}}",
  EDITMESSAGEATTACHMENTS_SETTINGS_CLEAR_ON_CANCEL_TITLE:
    "Clear the upload queue when the edit is cancelled",
});
