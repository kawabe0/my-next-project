import Image from "next/image";

import styles from "./index.module.css";
import { News } from "@/app/_libs/microcms";

/* 削除
type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt:string;
    createdAt:string;
};*/

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません。</p>;
    }
    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <div className={styles.link}>
                        <Image className={styles.image} src="/no-image.png" alt="No Imaage" width={1200} height={630}/>
                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                        </dl>
                        <dd className={styles.meta}>
                            <span className={styles.tag}>{article.category.name}
                            </span>
                            <span className={styles.data}>
                                <Image src="/clock.svg" alt="" width={16} height={16} priority/>
                                {article.publishedAt}
                            </span>
                        </dd>
                    </div>
                </li>
            ))}
        </ul>
    )
}
