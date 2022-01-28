const rawContents = `

### @roj1512 ###

لە جیهانی دیجیتاڵیدا هەموو شتێک لەسەر سفر و یەک بەندە
لەناو جەرگەی بارسێلۆنا شەقامێک هەیە ناوی کوردستانە
ئاسۆ ئامێدی لەوێ دانیشتووە
ئەم ڕۆژی ساڵی تازەیە نەورۆزە هاتەوە جەژنێکی کۆنی کوردە بەخۆشی و بەهاتەوە
بێکەس چەند ساڵ بەبێ کەس لەم شارەدا ژیا
گەر دەپرسی من لەبەر چی کەم دەخۆم من بە برسی قەت مەزانە غەم دەخۆم
با لەژێر کاریگەریی زمانی ترەوە بێینە دەرەوە
نە تۆ نە هاوڕێکانت بەشداری کۆبوونەوەکە نەبوون

#

### @roj1512 ###

`

export const contents = rawContents
	.split("\n")
	.filter(l => l && !l.startsWith("#"))
