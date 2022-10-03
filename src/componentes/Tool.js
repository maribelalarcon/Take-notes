import { Button, Stack, IconButton} from "@mui/material";
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

function Tool(){
   return (
    <Stack direction="row" justifyContent="center">
        <IconButton>
          <TextIncreaseIcon/> 
        </IconButton>

        <IconButton>
            <FormatSizeIcon/>
        </IconButton>

        <IconButton>
            <FormatUnderlinedIcon/>
        </IconButton>

        <IconButton>
           <FormatBoldIcon/>
        </IconButton>
        
        
        
    </Stack>
    
   )
}

export default Tool;