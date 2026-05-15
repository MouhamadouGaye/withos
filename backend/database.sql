-- -- database.sql
-- CREATE DATABASE sonko_campaign;
-- CREATE TABLE supporters (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(255),
--     phone_number VARCHAR(20),
--     contact_preference VARCHAR(10) CHECK (
--         contact_preference IN ('email', 'whatsapp', 'both')
--     ),
--     whatsapp_group_joined BOOLEAN DEFAULT FALSE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- CREATE TABLE campaign_stats (
--     id SERIAL PRIMARY KEY,
--     total_supporters INTEGER DEFAULT 0,
--     whatsapp_members INTEGER DEFAULT 0,
--     email_subscribers INTEGER DEFAULT 0
-- );
-- -- Insert initial stats
-- INSERT INTO campaign_stats (
--         total_supporters,
--         whatsapp_members,
--         email_subscribers
--     )
-- VALUES (0, 0, 0);
-- -- database.sql --- WITH TYPESCRIPTS---
-- database.sql
CREATE DATABASE sonko_campaign;
\ c sonko_campaign;
CREATE TABLE IF NOT EXISTS supporters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255),
    phone_number VARCHAR(20) NOT NULL,
    contact_preference VARCHAR(10) NOT NULL CHECK (
        contact_preference IN ('email', 'whatsapp', 'both')
    ),
    whatsapp_group_joined BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS campaign_stats (
    id SERIAL PRIMARY KEY,
    total_supporters INTEGER DEFAULT 0,
    whatsapp_members INTEGER DEFAULT 0,
    email_subscribers INTEGER DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Create index for better performance
CREATE INDEX idx_supporters_created_at ON supporters(created_at DESC);
CREATE INDEX idx_supporters_phone ON supporters(phone_number);
CREATE INDEX idx_supporters_email ON supporters(email);
-- Initialize stats
INSERT INTO campaign_stats (
        id,
        total_supporters,
        whatsapp_members,
        email_subscribers
    )
VALUES (1, 0, 0, 0) ON CONFLICT (id) DO NOTHING;
-- Create function to auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = CURRENT_TIMESTAMP;
RETURN NEW;
END;
$$ language 'plpgsql';
CREATE TRIGGER update_supporters_updated_at BEFORE
UPDATE ON supporters FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_stats_updated_at BEFORE
UPDATE ON campaign_stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();