import { useRouter } from "next/router"
import Link from "next/link";
import styles from "../styles/Home.module.css"
import blogPosts from "./assets/posts.json"
import BlogCard from "./components/BlogCard";

function Home() {
    const { locale, locales, asPath } = useRouter()

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.navbar}>
                    {
                        locales.map((l, i) => {
                            return <span
                                key={i}
                                className={l === locale ? styles.selected : ""}
                            >
                                <Link
                                    href={asPath}
                                    locale={l}
                                >
                                {
                                    l
                                }
                            </Link>
                            </span>
                        })
                    }
                </div>
                <div>
                    <h1>
                        My Multi-Language Blog
                    </h1>
                    <div>
                        {
                            blogPosts
                                .posts
                                .filter(p => p.locale === locale)
                                .map((blogPost, i) => {
                                    return <BlogCard
                                        key={i}
                                        blogPost={blogPost}
                                    />
                                })
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home

export async function getStaticProps(context) {
    return {
        props: {
            context,
        },
    };
}
