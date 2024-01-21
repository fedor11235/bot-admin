def sort_booking_date(booking_date):
    return sorted(sorted([i.split('/')[1] for i in booking_date.split('_')], key=lambda x: int(x.split('.')[0])),
                 key=lambda x: int(x.split('.')[1]))


#  print(sort_booking_date("morning/10.1_evening/12.3_morning/9.1"))
