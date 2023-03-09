import data from '@/data.json';
import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import styles from 'styles/options.module.css';

type Props = {
  searchTerm: string;
};

export function Options({ searchTerm }: Props) {
  const filteredData = Object.values(data.dictionary)
    .map((entry: any) => entry.title) // use the correct property name here
    .filter((title: string) =>
      title.toLowerCase().includes(searchTerm.toLowerCase())
    ); //Display only the first 5 items in the filteredData array
  const limitedData = filteredData.slice(0, 5);

  return (
    <div>
      <Box className={styles.box}>
        <List
          className={`${styles.paper} ${
            filteredData.length === 0 ? 'no-results' : ''
          }`}
        >
          {filteredData.length === 0 ? (
            <React.Fragment>
              <ListItem>
                <ListItemText
                  primary={`No results found for "${searchTerm}".`}
                />
              </ListItem>
              <Divider className={styles.divider} />
            </React.Fragment>
          ) : (
            limitedData.map((item, index) => {
				const slug = Object.keys(data.dictionary);				
				return (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemButton component="a" href={`/dictionary/${slug}`}>
                      <ListItemText primary={item} />
                    </ListItemButton>
                  </ListItem>
                  {index < limitedData.length && (
                    <Divider className={styles.divider} />
                  )}
                </React.Fragment>
              );
            })
          )}
        </List>
      </Box>
    </div>
  );
}
