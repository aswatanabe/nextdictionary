import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "styles/options.module.css";
import data from "@/data.json";

type Props = {
  searchTerm: string;
};

export function Options({ searchTerm }: Props) {
  const filteredData = Object.entries(data.dictionary)
    .map(([slug, entry]) => ({ slug, title: entry.title })) // use the correct property name here
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
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
              const { slug, title } = item
              return (
                <React.Fragment key={item.slug}>
                  <ListItem>
                    <Link href={`/dictionary/${slug}`} passHref legacyBehavior>
                      <ListItemButton component="a">
                        <ListItemText primary={title} />
                      </ListItemButton>
                    </Link>
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
