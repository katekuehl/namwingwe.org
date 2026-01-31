import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorCompany: string;
  authorImage: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "grace-namaganda-story",
    title: "From Zero Coding Knowledge to Frontend Developer at SafeBoda",
    excerpt: "Grace Namaganda shares her inspiring journey from knowing nothing about coding to landing her dream job as a frontend developer in just 6 months.",
    content: `
## My Journey Begins

When I first heard about Namwingwe TechRise, I was working as a receptionist at a small hotel in Kampala. I had always been curious about technology, watching my friends scroll through apps and wondering how they were made. But the tech world seemed so far away from my reality.

Everything changed when a friend shared a flyer about a free introductory coding workshop. I decided to attend, thinking I had nothing to lose. That two-hour session opened my eyes to possibilities I never knew existed.

## The Bootcamp Experience

I enrolled in the Web Development Bootcamp, and I won't lie – the first few weeks were incredibly challenging. HTML and CSS seemed manageable, but when we started JavaScript, I felt lost. There were nights I wanted to give up.

What kept me going was the incredible support system at Namwingwe. My mentor, Sarah, would spend extra hours helping me understand concepts. The study groups with fellow students became my lifeline. We celebrated each other's small wins and lifted each other up during difficult times.

## Building Real Projects

The turning point came during our capstone project. We had to build a functional web application from scratch. I chose to create a platform connecting local farmers with buyers in Kampala. Seeing my code come to life, solving a real problem for my community – that was magical.

## Landing My Dream Job

Three months after graduation, I received a call from SafeBoda. They had seen my portfolio on the Namwingwe website and were impressed with my projects. The interview process was nerve-wracking, but I was prepared.

Today, I work as a Frontend Developer at SafeBoda, building features that millions of Ugandans use every day. My salary has increased fivefold, and I'm able to support my family in ways I never imagined.

## My Advice to Future Students

To anyone considering joining Namwingwe TechRise: take the leap. It won't be easy, but nothing worth having ever is. The skills you'll gain, the connections you'll make, and the confidence you'll build will change your life forever.

Technology is not just for certain people – it's for all of us. And with the right support, any woman can thrive in this industry.
    `,
    author: "Grace Namaganda",
    authorRole: "Frontend Developer",
    authorCompany: "SafeBoda",
    authorImage: testimonial1,
    category: "Success Story",
    publishedAt: "2024-11-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "esther-akello-story",
    title: "How Mentorship Transformed My Career in Data Analytics",
    excerpt: "Esther Akello reflects on the invaluable mentorship she received and how it helped her navigate the tech industry with confidence.",
    content: `
## Finding My Path

Before Namwingwe TechRise, I was a mathematics teacher at a secondary school in Gulu. I loved working with numbers, but I felt there was more I could do with my skills. When I discovered data analytics, I knew I had found my calling.

## The Power of Mentorship

What set Namwingwe apart from other programs was the personalized mentorship. My mentor, Dr. Patience Namara, is a data scientist with over 15 years of experience. She didn't just teach me technical skills – she showed me how to navigate the industry as a woman.

Dr. Namara helped me understand that being from Northern Uganda wasn't a disadvantage – it was a unique perspective I could bring to data analysis. She taught me to speak up in meetings, negotiate my salary, and advocate for myself.

## Mastering Graphic Design

The Graphic Design program was rigorous. We learned Adobe Photoshop, Illustrator, InDesign, and visual communication fundamentals. But more importantly, we learned how to think like designers – understanding brand identity and creating visuals that tell compelling stories.

My favorite project was analyzing agricultural data to predict crop yields in different regions of Uganda. This work felt meaningful because it could directly impact farmers' lives.

## Joining Jumia Uganda

Through Namwingwe's career services, I connected with recruiters from Jumia Uganda. They were looking for data analysts who understood the local market. My background as a teacher and my new data skills made me the perfect candidate.

Today, I analyze customer behavior patterns and help Jumia make better business decisions. Every day, I use the skills and confidence I gained at Namwingwe.

## Paying It Forward

Now, I mentor two current Namwingwe students myself. Seeing their growth reminds me of my own journey. The tech industry needs more African women, and I'm committed to helping others find their path.
    `,
    author: "Esther Akello",
    authorRole: "Data Analyst",
    authorCompany: "Jumia Uganda",
    authorImage: testimonial2,
    category: "Success Story",
    publishedAt: "2024-10-28",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "3",
    slug: "florence-auma-story",
    title: "Balancing Motherhood and a Tech Career: A UX Designer's Story",
    excerpt: "Florence Auma shares how flexible learning options and a supportive community helped her transition to UX design while raising two children.",
    content: `
## A Mother's Dream

When I decided to change careers, my children were 3 and 5 years old. Everyone told me it was impossible – how could I learn a new skill while managing a household and caring for young children? But I knew that providing a better future for my kids meant investing in myself first.

## Finding Flexibility

Namwingwe TechRise understood that women's lives are complex. They offered evening classes, weekend workshops, and self-paced online modules. I could study while my children napped, attend Saturday sessions when my husband could watch them, and access recorded lectures whenever I had free time.

The flexibility wasn't just about scheduling – it was about understanding. When my son got sick and I missed a week of classes, my instructors helped me catch up without judgment. When I had to bring my daughter to a workshop because childcare fell through, she was welcomed with crayons and coloring books.

## Discovering UX Design

I chose UX Design because it combined creativity with problem-solving. I loved the idea of designing products that people would actually use and enjoy. The program taught me Figma, prototyping, user research, and design thinking.

My capstone project was redesigning a mobile banking app for women in rural areas. I conducted user interviews with market women in my own community, understanding their frustrations with existing apps. The final design was intuitive, accessible, and culturally appropriate.

## A Supportive Community

The other women in my cohort became like sisters. We formed a WhatsApp group where we shared resources, celebrated wins, and vented frustrations. Many of us were also mothers, so we understood each other's challenges in ways our families sometimes couldn't.

## Life at Andela

Today, I'm a UX Designer at Andela, working on products used across Africa. My salary allows me to send both children to a good school and save for their future education.

More importantly, my children see their mother pursuing her dreams. My daughter now says she wants to be a "computer person" when she grows up. That makes everything worth it.

## You Can Do It Too

To every mother who thinks it's too late or too hard: it's not. Your children don't need a perfect mother – they need a fulfilled one. Namwingwe TechRise will meet you where you are and help you get to where you want to be.
    `,
    author: "Florence Auma",
    authorRole: "UX Designer",
    authorCompany: "Andela",
    authorImage: testimonial3,
    category: "Success Story",
    publishedAt: "2024-09-12",
    readTime: "5 min read",
    featured: true,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};
