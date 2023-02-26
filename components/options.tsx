import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Dictionary } from "@/components/dictionary";
import styles from "styles/options.module.css";

export function Options({ searchTerm }) {
  const listItems = [
    searchTerm && <Dictionary searchTerm={searchTerm} />
  ];

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
              <Divider className={styles.divider} />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </div>
  );
}
