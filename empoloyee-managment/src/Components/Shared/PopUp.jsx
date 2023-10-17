import { styled, IconButton, DialogContent, Dialog } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(5, 2, 2, 2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(0),
	},
}));

function BootstrapDialogTitle(props) {
	const { children, onClose } = props;
	return (
		<>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						zIndex: 50,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</>
	);
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};
function PopUp(prop) {
	const { open, setOpen, tableCompetent, fullWidth = true, maxWidth = 'lg' } = prop;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<BootstrapDialog
			onClose={handleClose}
			open={open}
			maxWidth={maxWidth}
			fullWidth={fullWidth}
			sx={{
				borderRadius: '20px',
				'& .css-1fu2e3p-MuiPaper-root-MuiDialog-paper': {
					backgroundColor: 'transparent',
					borderRadius: '20px',
				},
			}}
		>
			<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
			<DialogContent
				dividers
				sx={{
					backgroundColor: '#114084',
					borderRadius: '2px',
				}}
			>
				{tableCompetent}
			</DialogContent>
		</BootstrapDialog>
	);
}

export default PopUp;
