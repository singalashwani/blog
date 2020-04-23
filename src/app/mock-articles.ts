import { Article } from './article';

export const ARTICLES: Article[] = [
    {
      id: 1,
      title: 'My first Article',
      description: 'first - quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      content: 'first - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et hendrerit mi. Ut non tortor quis nulla imperdiet malesuada. Sed commodo dolor vitae sem convallis laoreet. Mauris sit amet libero eros. Praesent facilisis aliquam tellus, eget varius purus mattis non. In nisi mauris, finibus vitae arcu sit amet, bibendum volutpat lorem. Quisque ut pellentesque libero. Sed feugiat, est et sagittis fringilla, enim ex sagittis sem, et lobortis felis nunc in nisi. Pellentesque maximus mi sed odio ornare, ut blandit metus porta. Nunc nulla nulla, vestibulum ut convallis vel, imperdiet at magna. Fusce in augue blandit, pretium odio efficitur, dapibus dui. Etiam auctor, sem non malesuada tempus, risus ex vehicula sem, ac dignissim dolor erat non nisi.',
      date: new Date(),
      imageUrl: 'https://picsum.photos/id/237/200',
      key: 'my-first-article'
    },
    {
      id: 2,
      title: 'My second Article',
      description: 'second - est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      content: 'second - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et hendrerit mi. Ut non tortor quis nulla imperdiet malesuada. Sed commodo dolor vitae sem convallis laoreet. Mauris sit amet libero eros. Praesent facilisis aliquam tellus, eget varius purus mattis non. In nisi mauris, finibus vitae arcu sit amet, bibendum volutpat lorem. Quisque ut pellentesque libero. Sed feugiat, est et sagittis fringilla, enim ex sagittis sem, et lobortis felis nunc in nisi. Pellentesque maximus mi sed odio ornare, ut blandit metus porta. Nunc nulla nulla, vestibulum ut convallis vel, imperdiet at magna. Fusce in augue blandit, pretium odio efficitur, dapibus dui. Etiam auctor, sem non malesuada tempus, risus ex vehicula sem, ac dignissim dolor erat non nisi.',
      date: new Date(),
      imageUrl: 'https://picsum.photos/seed/picsum/200',
      key: 'my-second-article'
    }
];
