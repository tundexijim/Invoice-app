import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import  './formcss/DatePickerInput.css';
import { useIssueState } from '../../States/formstate'
import dayjs from 'dayjs';
import { IoIosCalendar } from 'react-icons/io';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function DatePickerInput() {
    const issueDate = useIssueState()
    const getIssueDate = new Date(issueDate.get())
  return (
    <div className="datepicker-container">
            <label htmlFor="datePicker">Issue Date</label>
            <div className="customDatePickerDiv">
                <DatePicker id="datePicker"
                    dateFormat="dd MMM yyyy"
                    selected={getIssueDate}
                    onChange={(date) => issueDate.change(dayjs(date).format('YYYY-MM-DD'))}
                    renderCustomHeader={
                        ({ date, increaseMonth, decreaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                            <div className="react-datepicker__custom-header">
                                <button type="button" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                    <HiChevronLeft />
                                </button>
                                <span>
                                    {dayjs(date).format('MMM YYYY')}
                                </span>
                                <button type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                    <HiChevronRight />
                                </button>
                            </div>
                        )}
                />
                <span className="iconSpan"><IoIosCalendar /></span>
            </div>
        </div>
  )
}

export default DatePickerInput