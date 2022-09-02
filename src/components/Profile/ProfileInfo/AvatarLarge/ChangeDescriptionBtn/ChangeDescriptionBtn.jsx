import * as React from 'react';
import Button from '@mui/material/Button';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Stack from '@mui/material/Stack';

export default function ChangeDescriptionBtn(props) {
    if (props.ownerId === +props.params.id && !props.editMode) {
        return (<div >
            <Stack direction="row" alignItems="center" spacing={2}>
                <Button onClick={props.toggleEditMode} style={{ margin: 5 }} variant="contained" component="label">
                    Изменить
                    <TextSnippetIcon />
                </Button>
            </Stack>
        </div>
        );
    }

}
