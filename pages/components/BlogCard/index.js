import styles from "./BlogCard.module.css";

function BlogCard( props ) {
    const {blogPost} = props

    const {title, description, image} = blogPost

    return (
        <div className={styles.blogCard}>
            <div
                style={{backgroundImage: `url(${image})`}}
                className={styles.image}
            />
            <div className={styles.info}>
                <div className={styles.title}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.description}>
                    <span>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard
