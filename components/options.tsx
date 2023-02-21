import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import styles from "styles/options.module.css";

// export function Options() {
// 	return (
// 		<div>
// 			<Box className={styles.box}>
// 				<List className={styles.paper}>
// 					<ListItem>
// 						<ListItemButton component="a" href="#simple-list-A">
// 							<ListItemText primary="AAA"/>
// 						</ListItemButton>
// 					</ListItem>
// 					<Divider className={styles.divider}/>
// 					<ListItem>
// 						<ListItemButton component="a" href="#simple-list-B">
// 							<ListItemText primary="BBB"/>
// 						</ListItemButton>
// 					</ListItem>
// 					<Divider className={styles.divider}/>
// 					<ListItem>
// 						<ListItemButton component="a" href="#simple-list-C">
// 							<ListItemText primary="CCC"/>
// 						</ListItemButton>
// 					</ListItem>
// 					<Divider className={styles.divider}/>
// 					<ListItem>
// 						<ListItemButton component="a" href="#simple-list-D">
// 							<ListItemText primary="DDD"/>
// 						</ListItemButton>
// 					</ListItem>
// 					<Divider className={styles.divider}/>
// 					<ListItem>
// 						<ListItemButton component="a" href="#simple-list-E">
// 							<ListItemText primary="EEE"/>
// 						</ListItemButton>
// 					</ListItem>
// 					<Divider className={styles.divider}/>
// 				</List>
// 			</Box>
// 		</div>
// 	);
// }

export function Options() {
	const listItems = ["AAA", "BBB", "CCC", "DDD", "EEE"];
	return (
		<div>
			<Box className={styles.box}>
				<List className={styles.paper}>
					{listItems.map((item, index) => (
						<React.Fragment key={index}>
							<ListItem>
								<ListItemButton component="a" href={`#simple-list-${item}`}>
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