export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags?: string[];
};

const blogPosts: BlogPost[] = [
  {
    slug: "ilk-blog-yazim",
    title: "İlk Blog Yazım Son Üniversite Dersim",
    excerpt:
      "Üniversitedeki son dersimle birlikte, bitişi ve belirsizliği aynı anda hissettiğim bir dönemi yazdım. Bu yazı, bir dönem kapanırken içimde kalan sessiz hissi anlatıyor.",
    date: "2026-05-21",
    tags: ["örnek", "blog"],
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

export const postContent = `

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
`;
