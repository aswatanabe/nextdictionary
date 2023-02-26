import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Dictionary } from './dictionary';
import styles from 'styles/options.module.css';

export function Options({ searchTerm }) {
  const listItems = searchTerm ? [
    <Dictionary searchTerm={searchTerm} />,
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5"
  ] : [];

  return (
    <div>
      <Box className={styles.box}>
        <List className={styles.paper}>
          {listItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <ListItemButton component="a" href={`#simple-list-${index}`}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
              {index < listItems.length - 1 && (
                <Divider className={styles.divider} />
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </div>
  );
}