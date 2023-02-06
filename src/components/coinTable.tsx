import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { fetchCoinList, fetchCoinCount } from '../Redux/actions/coinAction';
import { useAppDispatch } from '../Redux/hooks';

function createData(
	rank: number,
	name: string,
	symbol: string,
	slug: string,
) {
	return { rank, name, symbol, slug };
}

const LIMIT_PAGE = 10;

const rows = [
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
	createData(1, "binance", "BUSD", "binance"),
];

export default function CryptoTable() {
	const [start, setStart] = useState(1);
	const dispatch = useAppDispatch();
	const coinInfo = useSelector((state: any) => state.coinInfo)
	const { list, count } = coinInfo;
	useEffect(() => {
		dispatch(fetchCoinCount());
		dispatch(fetchCoinList(start, LIMIT_PAGE));
	}, [dispatch, start]);

	const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
		setStart(LIMIT_PAGE * (page - 1) + 1);
	}
	return (
		<>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Rank</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Symbol</TableCell>
							<TableCell>Slug</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{list?.data?.map((row: any, index: number) => (
							<TableRow
								key={index}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">{row.rank}</TableCell>
								<TableCell component="th" scope="row">
									<div className='coin-name'>
										<img className="coin-logo" src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${row.id}.png`} loading="lazy" alt={`${row.name} Logo`} />
										<span>{row.name}</span>
									</div>
								</TableCell>
								<TableCell component="th" scope="row">{row.symbol}</TableCell>
								<TableCell component="th" scope="row">{row.slug}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Stack spacing={2}>
				<Pagination count={((count / LIMIT_PAGE) | 0) + 1} onChange={handleChange} color="primary" />
			</Stack>
		</>
	);
}