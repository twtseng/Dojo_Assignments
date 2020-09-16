import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { navigate } from '@reach/router';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


const AuthorForm = props => {
    const classes = useStyles();
    const [authorName, setAuthorName] = React.useState(null);
    const [errorString, setErrorString] = React.useState(null);

    const getAuthor = id => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => setAuthorName(response.data.result.name))
    };

    const updateAuthor = () => {
        // Update existing author
        if (props.authorId) {
            axios.patch(`http://localhost:8000/api/authors/update/${props.authorId}`, { name: authorName })
            .then(response => {
                console.log(response.data);
                if (response.data.status === "succeeded") {
                    props.refreshAuthors();
                    navigate(`/`);
                } else {
                    setErrorString(JSON.stringify(response.data.message));
                }
            });
        } else { // Add new author
            axios.put(`http://localhost:8000/api/authors/add`, { name: authorName })
            .then(response => {
                console.log(response.data);
                if (response.data.status === "succeeded") {
                    props.refreshAuthors();
                    navigate(`/`);
                } else {
                    setErrorString(JSON.stringify(response.data.message));
                }
            });

        }
    }

    React.useEffect(() => {
        if (props.authorId) {
            getAuthor(props.authorId);
        }
    }, [props.authorId])

    return (
      <form className={classes.root} noValidate autoComplete="off">
          <h1>{props.prompt}</h1>
        <Grid container spacing={1}>
            <Grid item xs={2}>
                    <TextField
                    variant="outlined" 
                    id="author_name"
                    label="Author"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                    helperText={errorString}
                    error={errorString !== ""}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" color="primary" onClick={() => navigate(`/`)}>Cancel</Button>
            </Grid>
            <Grid item xs={1}>
                <Button variant="contained" color="primary" onClick={() => updateAuthor() }>Submit</Button>
            </Grid>
        </Grid>  
      </form>
    );
}

export default AuthorForm
