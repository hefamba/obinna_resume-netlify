import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.mythosink.com/wp-content/uploads/2019/12/b7b956d77fb4422f95ee451cbc6328540ff8d93a_32966084361f23aba0b4dbe0506b39051c86a723_twitter.jpeg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkM-C_Kg3MxSycfzTGXrcxsLKA311g9Sd5YQ&usqp=CAU',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.immediate.co.uk/production/volatile/sites/3/2020/12/Halo-Infinite-release-date-confirmed-ee747a9.jpeg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://www.techinn.com/f/13734/137343676_2/nintendo-switch-console.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://i.pinimg.com/736x/8b/7f/6d/8b7f6db87d4328a3647a249344a9f0ec.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://wallpapercave.com/wp/wp4159077.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://wallpaperboat.com/wp-content/uploads/2020/08/28/53671/landscape-01.jpg',
    title: 'Fern',
  },
];
