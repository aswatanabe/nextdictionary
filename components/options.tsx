import data from '@/data.json';
import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import styles from 'styles/options.module.css';

type Props = {
	searchTerm: string;
}

export function Options({ searchTerm }: Props) {
  // const listItems = [<Dictionary searchTerm={searchTerm} />,"Item 2","Item 3"];

	const filteredData = data.dictionary
							.map((id) => id.title) // use the correct property name here
							.filter((id) => id.toLowerCase().includes(searchTerm.toLowerCase()));
	//Display only the first 5 items in the filteredData array
	const limitedData = filteredData.slice(0, 5);

	return (
		<div>
			<Box className={styles.box}>
				<List className={`${styles.paper} ${filteredData.length === 0 ? 'no-results' : ''}`}>
					{filteredData.length === 0 ? (
						<React.Fragment>
							<ListItem>
								<ListItemText primary={`No results found for "${searchTerm}".`} />
							</ListItem>
							<Divider className={styles.divider} />
						</React.Fragment>
					) : (
						limitedData.map((item, index) => (
							<React.Fragment key={index}>
								<ListItem>
									<ListItemButton component="a" href={`#simple-list-${index}`}>
										<ListItemText primary={item} />
									</ListItemButton>
								</ListItem>
								{index < limitedData.length && (
									<Divider className={styles.divider} />
								)}
							</React.Fragment>
						))
					)}
				</List>
			</Box>
		</div>
	);
}