import { useState } from 'react';
import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  useTheme,
  ExtendButtonBase,
  ButtonTypeMap,
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';

import NumberInput from '../../components/NumberInput';
import ContainerPaper from './ContainerPaper';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ExtendedButton = Button as ExtendButtonBase<
  ButtonTypeMap<
    {
      onMouseEnter: React.MouseEventHandler<HTMLAnchorElement>;
      onMouseLeave: React.MouseEventHandler<HTMLAnchorElement>;
    },
    'button'
  >
>;

interface PackDescriptionCardProps {
  heading: string;
  subHeading: string;
  price: number;
  totalBought: string;
  packDetails: Array<string> | string;
  onHoverButton: React.MouseEventHandler<HTMLAnchorElement>;
}

const PackDescriptionCard: React.FC<PackDescriptionCardProps> = ({
  heading,
  subHeading,
  price,
  totalBought,
  packDetails,
  onHoverButton,
}) => {
  const { spacing, typography } = useTheme();

  const [quantity, setQuantity] = useState<number>(1);

  const totalPrice = formatter.format(
    price * (quantity < 1 ? 1 : quantity > 99 ? 99 : quantity),
  );

  return (
    <ContainerPaper>
      <div>
        <Typography
          variant="h1"
          style={{
            textTransform: 'uppercase',
            marginBottom: typography.pxToRem(11.2),
          }}
        >
          {heading}
        </Typography>

        <Typography variant="body1">{subHeading}</Typography>

        <div
          style={{
            color: typography.body1.color,
            fontFamily: '"Exo 2", sans-serif',
            fontSize: typography.pxToRem(20.4),
            wordSpacing: typography.pxToRem(4.5),
            margin: spacing(typography.pxToRem(22.4), 0),
          }}
        >
          {totalPrice[0]} {totalPrice.slice(1)}
        </div>

        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={typography.pxToRem(24)}
        >
          <Grid item>
            <div style={{ width: typography.pxToRem(70) }}>
              <NumberInput
                id="quantity"
                value={quantity}
                onChange={event => setQuantity(+event.target.value)}
                onBlur={() =>
                  setQuantity(curState =>
                    curState <= 1 ? 1 : curState >= 99 ? 99 : curState,
                  )
                }
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      color="secondary"
                      size="small"
                      onClick={() =>
                        setQuantity(curState =>
                          curState <= 1 ? 1 : --curState,
                        )
                      }
                    >
                      <RemoveIcon
                        color="secondary"
                        style={{ fontSize: typography.pxToRem(12) }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color="secondary"
                      size="small"
                      onClick={() =>
                        setQuantity(curState =>
                          curState >= 99 ? 99 : ++curState,
                        )
                      }
                    >
                      <AddIcon
                        color="secondary"
                        style={{ fontSize: typography.pxToRem(12) }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
                aria-describedby="quantity-input-field"
                inputProps={{
                  'aria-label': 'quantity',
                }}
              />
            </div>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <ExtendedButton
              variant="contained"
              color="primary"
              onMouseEnter={onHoverButton}
              onMouseLeave={onHoverButton}
            >
              Buy Packs
            </ExtendedButton>
          </Grid>
        </Grid>

        <Typography variant="body2" color="#9c9c9c">
          {totalBought}
        </Typography>

        <Divider style={{ margin: spacing(typography.pxToRem(28), 0) }} />

        <Typography variant="h2" color="#ccc">
          Pack Details
        </Typography>

        {typeof packDetails === 'string' ? (
          <Typography variant="body2">{packDetails}</Typography>
        ) : (
          packDetails.map((para, index) => (
            <Typography variant="body2" key={index}>
              {para}
            </Typography>
          ))
        )}
      </div>
    </ContainerPaper>
  );
};

export default PackDescriptionCard;
