-- users
    -- id pk
    --email
--currencies
    --id pk
    --name

--accounts_table
    --id pj
    --user_id fk
    --amount/balance float
    --currency_id fk =>1

--transactions
    --id pk
    --sender_id (user_id) =>fk 1
    --receiver_id (user_id) =>fk 13
    --amount 100
    --Fcurrency_id (from_sender) =>FK from currencies 2
    --Tcurrency_id (to_sender) =>FK from currencies
    --exchange_rate 
    --timestamp();