/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: JA (Japanese; 日本語)
 */
jQuery.extend(jQuery.validator.messages, {
    maxWords: jQuery.validator.format("{0}単語以内で入力してください。"),
    minWords: jQuery.validator.format("{0}単語以上で入力してください。"),
    rangeWords: jQuery.validator.format("{0}単語から{1}単語以内で入力してください。"),
    letterswithbasicpunc: "Letters or punctuation only please",
    alphanumeric: "英数字またはアンダースコアで入力してください。",
    lettersonly: "英字で入力してください。",
    nowhitespace: "空白は入力できません。",
    //ziprange: "Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx",
    //zipcodeUS: "The specified US ZIP Code is invalid",
    integer: "整数で入力してください。",
    //vinUS: "The specified vehicle identification number (VIN) is invalid.",
    //dateITA: "Please enter a correct date",
    //dateNL: "Vul hier een geldige datum in.",
    time: "00:00から23:59までの時間を入力してください。",
    time12h: "00:00 amから12:00 pmまでの時間を入力してください。",
    //phoneUS: "Please specify a valid phone number",
    //phoneUK: 'Please specify a valid phone number',
    //mobileUK: 'Please specify a valid mobile number',
    //phonesUK: 'Please specify a valid uk phone number',
    //postcodeUK: 'Please specify a valid postcode',
    strippedminlength: jQuery.validator.format("{0}文字以上で入力してください。"),
    email2: jQuery.validator.messages.email,
    url2: jQuery.validator.messages.url,
    creditcardtypes: "有効なクレジットカード番号を入力してください。",
    ipv4: "有効なIP v4アドレスを入力してください。",
    ipv6: "有効なIP v6アドレスを入力してください。",
    pattern: "不正な形式です。",
    require_from_group: jQuery.validator.format("これらの項目は{0}文字以上で入力してください。"),
    skip_or_fill_minimum: jQuery.validator.format("これらの項目は空欄または{0}文字以上で入力してください。"),
    accept: jQuery.validator.format("有効なmimeタイプのファイルを指定してください。"),
    extension: jQuery.validator.format("有効な拡張子のファイルを指定してください。")
});