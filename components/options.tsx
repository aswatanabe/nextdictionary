import * as React from 'react';
import Box from '@mui/material/Box';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import styles from "styles/options.module.css";

export function Options() {
	return (
		<div>
			<Box className={styles.box}>
				<List className={styles.paper}>
					<ListItem>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="AAA"/>
						</ListItemButton>
					</ListItem>
					<Divider className={styles.divider}/>
					<ListItem>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="BBB"/>
						</ListItemButton>
					</ListItem>
					<Divider className={styles.divider}/>
					<ListItem>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="CCC"/>
						</ListItemButton>
					</ListItem>
					<Divider className={styles.divider}/>
					<ListItem>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="DDD"/>
						</ListItemButton>
					</ListItem>
					<Divider className={styles.divider}/>
					<ListItem>
						<ListItemButton component="a" href="#simple-list">
							<ListItemText primary="EEE"/>
						</ListItemButton>
					</ListItem>
					<Divider className={styles.divider}/>
				</List>
			</Box>
		</div>
	);
}