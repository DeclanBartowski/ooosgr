import type {menuItem} from "~/types/root";

export const newsMenuList  =ref<menuItem[]>([
    {
        title: 'Новости',
        link: '/articles/news/'
    },
    {
        title: 'Видео',
        link: '/articles/video/'
    },
    {
        title: 'Статьи',
        link: '/articles/articles/'
    }
]);
