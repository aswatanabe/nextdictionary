import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { Options } from '@/components/options';
import styles from 'styles/search.module.css';

export function Search() {
	const [searchTerm, setSearchTerm] = useState('');
	const handleClearClick = () => setSearchTerm('');

	return (
		<div>
			<Box className={styles.box}>
				<Paper
					component="form"
					onSubmit={(event) => event.preventDefault()}
					className={styles.paper}
				>
					<InputBase
						//検索機能
						type="text"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						//style
						className={styles.inputBase}
						placeholder="単語・熟語を入力"
						inputProps={{ 'aria-label': '単語・熟語を入力' }}
					/>
					<IconButton
						type="button"
						className={styles.iconButton}
						aria-label="clear"
						onClick={handleClearClick}
					>
						<ClearIcon />
					</IconButton>
					<Divider className={styles.divider} orientation="vertical" />
					<IconButton color="primary" className={styles.iconButton} aria-label="directions">
						<SearchIcon />
					</IconButton>
				</Paper>
			</Box>
			{searchTerm && <Options searchTerm={searchTerm} />}
		</div>
	);
}