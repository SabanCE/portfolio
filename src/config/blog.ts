export type BlogPost = {
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  date: string;
  tags?: string[];
  content: {
    tr: string;
    en: string;
  };
};

const blogPosts: BlogPost[] = [
  {
    slug: "ilk-blog-yazim",
    title: "İlk Blog Yazım Son Üniversite Dersim",
    titleEn: "My First Blog Post: Last University Class",
    excerpt:
      "Üniversitedeki son dersimle birlikte, bitişi ve belirsizliği aynı anda hissettiğim bir dönemi yazdım. Bu yazı, bir dönem kapanırken içimde kalan sessiz hissi anlatıyor.",
    excerptEn:
      "I wrote about the strange mix of ending and uncertainty during my last university lecture. This post reflects the quiet feeling of a chapter closing.",
    date: "2026-05-21",
    tags: ["örnek", "blog"],
    content: {
      tr: `

Bunu yazarken bile biraz garip hissediyorum çünkü yıllardır hayatımın bir parçası olmuş bir dönemin sonuna gelmek düşündüğümden daha farklı hissettirdi.

İlk başladığım günleri dün gibi hatırlıyorum. Her şey yeniydi, biraz karışıktı ve çoğu zaman ne yaptığımı tam bilmeden ilerliyordum. O başladığın an var ya, sanki önünde sınırsız bir süreç varmış gibi hissediyorsun. Ama sonra bir bakıyorsun, gerçekten bitiyor.

Atatürk Üniversitesi benim için sadece bir okul değildi. Aynı zamanda kendimi tanıdığım, değiştiğim ve büyüdüğüm bir dönemdi.

Bugün son derste otururken içimde garip bir his vardı. Bir yandan “nihayet bitiyor” hissi, diğer yandan ise 5 yıllık eğitim hayatımın sona eriyor olması.

Sanırım en çok da bu yüzden içim biraz buruk.

Çünkü insan bir rutinin içinde yaşarken onun sonsuza kadar süreceğini sanıyor. Ama bir gün son kez o sınıfa giriyorsun ve bunun farkına varıyorsun.

Garip olan şeylerden biri de şu sanırım: Bir dönemin sonuna gelirken, o dönemin içinde bazı şeyleri yeni yeni keşfetmeye başlıyorsun.

Bazen bir ortamı, bazen insanları, bazen de kendini...

Ve tam o noktada insanın aklından şu geçiyor:

“Bunu neden daha önce fark etmedim?”

Ama sanırım hayat biraz böyle işliyor. İnsan bazı şeyleri tam anlamıyla anlamaya başladığında, o dönemin sonuna yaklaşmış oluyor.

Şimdi mezuniyet çok yakın. Bundan sonrası biraz belirsiz. Açıkçası her şey netleşmiş gibi hissetmiyorum ama sanırım hayatın bir kısmı da böyle ilerliyor.

Belki de bu süreçte en çok şunu öğrendim:

Hayatta iyi veya kötü, yaşadığımız bütün süreçler bir noktada sona eriyor. Biz çoğu şeyi sonsuzmuş gibi yaşayarak ilerliyorsak da, sona geldiğinde aslında hiçbir şeyin kalıcı olmadığını anlıyorsun.

Bugün hissettiğim şey tam olarak mutluluk değil, tam olarak üzüntü de değil.

Daha çok bir dönemin sessizce kapanışını izlemek gibi.

Buna rağmen, bunun bir son değil yeni bir başlangıç olduğunu da biliyorum.
`,
      en: `

Writing this still feels strange because reaching the end of a period that has been part of my life for years feels different than I expected.

I remember my first days like they were yesterday. Everything was new, a little confusing, and often I moved forward without fully knowing what I was doing. That moment when you start feels like there is an endless path ahead. Then you look up and it really ends.

Atatürk University was more than a school for me. It was a time when I discovered myself, changed, and grew.

Today, sitting in the final lecture, I felt a strange sensation. On one hand, the relief of “finally it is ending,” and on the other, the realization that five years of study are coming to a close.

Maybe that is why I feel a bit bittersweet.

Because while living inside a routine, you assume it will last forever. Then one day you walk into that classroom for the last time and notice the end.

One of the oddest things is that as a period ends, you begin to discover some things only at the very end.

Sometimes a place, sometimes people, sometimes yourself...

And right then your mind asks:

"Why didn’t I notice this sooner?"

But maybe life works that way. When you truly begin to understand something, you are often close to the end of that chapter.

Now graduation is very near. What comes next is a bit uncertain. Honestly, I don’t feel like everything is clear yet, but perhaps part of life always moves like this.

Maybe the most important lesson I learned in this process is:

Whether good or bad, all of our experiences come to an end at some point. Even if we live as if everything is endless, when the end arrives we realize nothing is permanent.

What I feel today is not happiness, not sadness.

It feels more like watching a chapter close quietly.

Even so, I know this is not an ending, but a new beginning.
`,
    },
  },
];

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
