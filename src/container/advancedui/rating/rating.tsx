import  { FC, Fragment, useState } from 'react';
import Pageheader from '../../../components/common/pageheader/pageheader';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import StarsIcon from '@mui/icons-material/Stars';

interface RatingsProps {}

const Ratings: FC<RatingsProps> = () =>{ 
  const [ratingValue, setRatingValue] = useState<number | null>(null);
  const [ratingValue1, setRatingValue1] = useState<number | null>(null);
  const handleRatingChange1 = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRatingValue1(newValue); // Update the rating value when the user clicks
  };
  const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRatingValue(newValue); // Update the rating value when the user clicks
  };
  const [ratingValue2, setRatingValue2] = useState<number | null>(null);
  const handleRatingChange2 = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRatingValue2(newValue); // Update the rating value when the user clicks
  };
  const [ratingValue3, setRatingValue3] = useState<number | null>(null);
  const handleRatingChange3 = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
      setRatingValue3(newValue); // Update the rating value when the user clicks
  };

  const handleResetRating = () => {
      setRatingValue(null); // Clear the rating when the button is clicked
  };

  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState<any>(-1);

  const labels: string[] = ['Poor', 'Fair', 'Good', 'Excellent', 'Perfect'];
  function getLabelText(value: number) {
      return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
  return(
  <Fragment>
                <Pageheader currentpage="Ratings" activepage=" Advanced Ui" mainpage="Ratings" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Rater
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Show Some <span className="text-danger">❤</span> with rating :</p>
                                <div id="rater-basic">
                                <Rating name="clickable-rating"
                                    value={ratingValue1}
                                    onChange={handleRatingChange1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                5 star rater with steps
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Dont forget to rate the product :</p>
                                <div id="rater-steps">
                                <Rating name="clickable-rating"
                                    value={ratingValue2}
                                    onChange={handleRatingChange2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Custom messages
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Your rating is much appreciated👏 :</p>
                                <div id="custom-messages">
                                <Box sx={{ '& > legend': { mt: 2 } }} >
                                    <Rating name="no-value" size="large" value={4} max={5} />
                                </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Unlimited number of stars readOnly
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Thanks for rating :</p>
                                <div id="stars-unlimited">
                                <Stack spacing={1} className="rating-stars block my-rating-7 flex-wrap">
                                    <Rating name="half-rating-read" value={6} max={10} size="large" readOnly />
                                </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                5 Star rater with custom isBusyText and simulated backend
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Thanks for rating :</p>
                                <div id="stars-busytext">
                                <Rating name="clickable-rating"
                                    value={ratingValue3}
                                    onChange={handleRatingChange3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                On hover event
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Please give your valuable rating :</p>
                                <div className="flex flex-wrap items-center">
                                    <div id="stars-hover">
                                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChange={(_event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(_event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {value !== null && (
                                        <Box className="rating-stars my-rating-9 rating-9" sx={{ ml: 2 }}>
                                            <span className="live-rating badge bg-success/10 text-success ms-4">
                                                {labels[hover !== -1 ? hover : value]}
                                            </span>
                                        </Box>
                                    )}
                                </Box>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Clear/reset rater
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between">
                                <p className="text-[.875rem] mb-0 font-semibold">Thank You so much for your support :</p>
                                <div className="flex flex-wrap items-center">
                                    <div id="rater-reset">
                                    <Rating
                                        name="clickable-rating"
                                        value={ratingValue}
                                        onChange={handleRatingChange} // Handle rating change when the user clicks
                                    />
                                    </div>
                                    <button type="button" aria-label="button"     onClick={handleResetRating}
                                     className="ti-btn ti-btn-icon ti-btn-sm ti-btn-danger !ms-4" id="rater-reset-button">
                                        <i className="ri-restart-line"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </Fragment>
);
}
export default Ratings;
