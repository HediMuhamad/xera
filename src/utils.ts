function fix(string: string) {
	string = string.replace(/‌/g, "")
	string = string.replace(/ـ/g, "")
	string = string.replace(/ھ/g, "ه")
	string = string.replace(/ي/g, "ی")
	string = string.replace(/ك/g, "ک")
	string = string.replace(/ة/g, "ە")
	string = string.replace(/ء/g, "ئ")
	string = string.replace(/ؤ/g, "ۆ")
	return string
}

export function areEqual(x: string, y: string) {
	return fix(x) == fix(y)
}
