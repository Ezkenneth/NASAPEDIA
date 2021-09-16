import { makeStyles, StylesProvider } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(5, 0, 4)
  },
  
  resCard: {
    maxWidth: 1000,
  },
  media: {
    height: 250,
  },
  card: {
    maxWidth: 215,
    marginLeft: 17,
    height: 120
  },
  cardContent: {
    height:10,
  },
  commentHeader: {
    padding: theme.spacing(2, 0, 1),
    margin: theme.spacing(3, 0, 1)
  },
  commentDivider: {
    margin: theme.spacing(0, 0, 2)
  },
  rateSlider: {
    width: 220,
  },
  rateInput: {
    width: 42,
  },
  rateIcons: {
    marginTop: 40,
  },
  menuCard: {
    maxWidth: 400,
    height: 330,
    margin: theme.spacing(3, 0, 0)
  },
  menuMedia: {
    height: 200,
  },
  rateTypography: {
    margin: theme.spacing(2, 5, -1),
    marginRight: 40,
    marginLeft: 50,
  },
  commentTypography: {
    margin: theme.spacing(0, 11, 0),
   
    
   
  },
  commentText: {
    margin: theme.spacing(1,2, 1),
    
  },
  rateCommentSection: {
    padding: theme.spacing(20, 0, 0),
  },
  footer: {
    padding: theme.spacing(3, 2),
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
 }));

export default useStyles