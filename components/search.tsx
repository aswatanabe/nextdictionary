import styles from "styles/search.module.css";
import * as React from 'react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

export function Search() {
	return (
		<Box className={styles.box}>
			<Paper component="form" className={styles.paper}>
				<InputBase
					className={styles.inputBase}
					placeholder="単語・熟語を入力"
					inputProps={{ 'aria-label': '単語・熟語を入力' }}
				/>
				<IconButton type="button" className={styles.iconButton} aria-label="search">
					<ClearIcon />
				</IconButton>
				<Divider className={styles.divider} orientation="vertical" />
				<IconButton color="primary" className={styles.iconButton} aria-label="directions">
					<SearchIcon />
				</IconButton>
			</Paper>
		</Box>
	);
}