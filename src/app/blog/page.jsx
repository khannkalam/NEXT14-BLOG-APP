import CardList from "@/components/cardList/CardList";
import styles from "./blog.module.css";
import MenuPage from "@/components/menu/MenuPage";


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> {cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <MenuPage />
      </div>
    </div>
  );
};

export default BlogPage;