CREATE TABLE IF NOT EXISTS jk_app_users (
    id serial PRIMARY KEY,
    uuid uuid NOT NULL,
    user_name varchar(54) NOT NULL,
    name varchar(54) NOT NULL,
    mobile_number varchar(16) NOT NULL,  -- Storing as a string to handle non-numeric characters
    email_id varchar(108),
    type varchar(16) NOT NULL,
    active boolean,
    created_at timestamp with time zone DEFAULT now(),  -- Add a timestamp for when the record was created
    updated_at timestamp with time zone DEFAULT now(),  -- Add a timestamp for when the record was last updated
    CONSTRAINT unique_uuid UNIQUE (uuid),  -- Ensure UUID uniqueness
    CONSTRAINT unique_user_name UNIQUE (user_name),  -- Ensure unique usernames
    CONSTRAINT check_mobile_number CHECK (mobile_number ~ '^[0-9]+$')  -- Check for numeric mobile numbers
);
