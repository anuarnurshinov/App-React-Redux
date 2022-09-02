import * as React from 'react';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function ChangeAvatarBtn(props) {
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhotoThunkCreator(e.target.files[0])
        }
    }
    if (props.ownerId === +props.params.id) {
        return (<div >
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button style={{ margin: 5 }} variant="contained" component="label">
                    Изменить
                    <input hidden accept="image/*" onChange={mainPhotoSelected} multiple type="file" />
                    <PhotoCamera />
                </Button>

            </Stack>
        </div>

        );
    }

}
