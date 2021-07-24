import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, FormControl, Checkbox, FormControlLabel, TextField, MenuItem, Select, FormHelperText, InputLabel, Radio, RadioGroup, FormLabel, FormGroup, Grid } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Controller, useForm } from 'react-hook-form';
import './App.css'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',

  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 700
  },

  grid: {
    paddingRight: theme.spacing(10)
  },

  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },

  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: "50%"
  }
}));

export default function TransitionsModal() {
  //Styles
  const classes = useStyles();

  //useForm
  const { handleSubmit, control, formState: { errors }, reset } = useForm({
    defaultValues: {
      fullname: '',
      Email: '',
      level: '',
      date: '',
      gender: '',
      hobbies: false,
      address: ''
    }
  });
  const onSubmit = (data) => {

    console.log(data)

    reset()
  };


  //Modal  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button type="button" color="primary" onClick={handleOpen}>
        Information
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <FormControl className={classes.paper}>
            <FormControlLabel
              control={
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container>
                    <Grid className={classes.grid} item xs={8}>
                      <Controller
                        name="fullname"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please enter name.",
                        }}
                        render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                          <TextField value={value} onChange={onChange}
                            label="Full name"
                            className={classes.inputField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            error={invalid}
                            helperText={error?.message}
                          />
                        )}
                      ></Controller>

                      <Controller
                        name="Email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please enter email.",
                        }}
                        render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                          <TextField value={value} onChange={onChange}
                            label="Email"
                            className={classes.inputField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            error={invalid}
                            helperText={error?.message}

                          />
                        )}
                      ></Controller>

                      <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Please enter address.",
                        }}
                        render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                          <TextField value={value} onChange={onChange}
                            label="Address"
                            className={classes.inputField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            error={invalid}
                            helperText={error?.message}

                          />
                        )}
                      ></Controller>

                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Level</InputLabel>
                        <Controller
                          name="level"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Please enter level.",
                          }}
                          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
                            <Select value={value} onChange={onChange} error={invalid} label="Level" >
                              <MenuItem value="Intern">Intern</MenuItem>
                              <MenuItem value="Fresher">Fresher</MenuItem>
                              <MenuItem value="Junior">Junior</MenuItem>
                            </Select>
                          )}
                        />
                        <FormHelperText error>{errors.course?.message}</FormHelperText>
                      </FormControl>

                    </Grid>

                    <Grid item xs={4}>
                      <FormControl variant="outlined" className={classes.formControl} noValidate>
                        <Controller
                          control={control}
                          name="date"
                          defaultValue=""
                          rules={{
                            required: "Please enter birthday.",
                          }}
                          render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                            <TextField
                              id="date"
                              label="Birdthday"
                              type="date"
                              error={invalid}
                              helperText={error?.message}
                              value={value}
                              formate="MMM/dd/yyyy"
                              className={classes.inputField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              onChange={onChange}
                            />
                          )}
                        ></Controller>
                      </FormControl>

                      <FormControl
                        className={classes.inputField}
                      >
                        <FormLabel>Gender</FormLabel>
                        <Controller
                          control={control}
                          name="gender"
                          defaultValue=""
                          rules={{
                            required: "Please enter gender.",
                          }}
                          render={({ field: { onChange, value } }) => (
                            <RadioGroup row value={value} onChange={onChange} >
                              <FormControlLabel
                                value="female"
                                control={
                                  <Radio color="primary" />
                                }
                                label="Female"
                              />
                              <FormControlLabel
                                value="male"
                                control={
                                  <Radio color="primary" />
                                }
                                label="Male"
                              />
                            </RadioGroup>
                          )}
                        ></Controller>

                        <FormHelperText error>{errors.gender?.message}</FormHelperText>
                      </FormControl>


                      <FormControl variant="outlined" className={classes.inputField}>
                        <FormLabel>Hobbies</FormLabel>
                        <Controller
                          name="hobbies"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "Please enter hobbies.",
                          }}
                          render={({ field: { onChange, value } }) => (
                            <FormGroup row >
                              <FormControlLabel
                                value="Watch television"
                                control={<Checkbox color="primary" onChange={(e) => { onChange(e.target.checked) }} checked={value} />}
                                label="Watch television"
                              />
                              <FormControlLabel
                                value="Play football"
                                control={<Checkbox color="primary" />}
                                label="Play football"
                              />
                              <FormControlLabel
                                value="Read newpaper"
                                control={<Checkbox color="primary" />}
                                label="Read newpaper"
                              />
                            </FormGroup>
                          )}
                        />
                        <FormHelperText error>{errors.hobbies?.message}</FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <div className="submit">
                    <Button variant="contained" color="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              }
            />
          </FormControl>
        </Fade>
      </Modal>
    </div>
  );
}