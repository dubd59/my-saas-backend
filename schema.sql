create table if not exists `analytics_event` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `event_type` varchar(100) not null,
    `event_date` datetime not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `analytics_event_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `analytics_insight` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `report_id` bigint not null,
    `insight` text not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `report_id` (`report_id`),
    constraint `analytics_insight_ibfk_1` foreign key (`report_id`) references `analytics_report` (`id`)
);

create table if not exists `analytics_report` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `report_date` datetime not null,
    `summary` text,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `analytics_report_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `creator_payment` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `payment_method` varchar(100) not null,
    `account_details` text not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `creator_payment_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `creator_portfolio` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `title` varchar(255) not null,
    `description` text,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `creator_portfolio_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `creator_profile` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `first_name` varchar(100) not null,
    `last_name` varchar(100) not null,
    `email` varchar(255) not null,
    `bio` text,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `email` (`email`),
    unique key `uuid` (`uuid`)
);

create table if not exists `customer_feedback` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `customer_id` bigint not null,
    `feedback_text` text not null,
    `feedback_date` datetime not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `customer_id` (`customer_id`),
    constraint `customer_feedback_ibfk_1` foreign key (`customer_id`) references `customer_profile` (`id`)
);

create table if not exists `customer_interaction` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `customer_id` bigint not null,
    `interaction_date` datetime not null,
    `notes` text,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `customer_id` (`customer_id`),
    constraint `customer_interaction_ibfk_1` foreign key (`customer_id`) references `customer_profile` (`id`)
);

create table if not exists `customer_profile` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `first_name` varchar(100) not null,
    `last_name` varchar(100) not null,
    `email` varchar(255) not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `email` (`email`),
    unique key `uuid` (`uuid`)
);

create table if not exists `email_campaign` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `subject` varchar(255) not null,
    `send_date` datetime default null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `email_campaign_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `email_lead` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `address` varchar(255) not null,
    `campaign_id` bigint not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `campaign_id` (`campaign_id`),
    constraint `email_lead_ibfk_1` foreign key (`campaign_id`) references `email_campaign` (`id`)
);

create table if not exists `email_template` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `template_name` varchar(255) not null,
    `content` text,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `email_template_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `marketing_campaign` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `campaign_name` varchar(255) not null,
    `budget` decimal(10, 2) not null,
    `start_date` datetime default null,
    `end_date` datetime default null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `marketing_campaign_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `marketing_channel` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `channel_name` varchar(100) not null,
    `description` text,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`)
);

create table if not exists `marketing_lead` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `campaign_id` bigint not null,
    `lead_name` varchar(255) not null,
    `contact_info` varchar(255) default null,
    `source` varchar(100) default null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `campaign_id` (`campaign_id`),
    constraint `marketing_lead_ibfk_1` foreign key (`campaign_id`) references `marketing_campaign` (`id`)
);

create table if not exists `project_asset` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `project_id` bigint not null,
    `asset_url` varchar(255) not null,
    `asset_type` varchar(50) not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `project_id` (`project_id`),
    constraint `project_asset_ibfk_1` foreign key (`project_id`) references `project_listing` (`id`)
);

create table if not exists `project_listing` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `title` varchar(255) not null,
    `description` text,
    `price` decimal(10, 2) not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `project_listing_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `project_pricing` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `project_id` bigint not null,
    `currency` varchar(10) not null,
    `discount` decimal(5, 2) default '0.00',
    `tax` decimal(5, 2) default '0.00',
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `project_id` (`project_id`),
    constraint `project_pricing_ibfk_1` foreign key (`project_id`) references `project_listing` (`id`)
);

create table if not exists `sale_order` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `project_id` bigint not null,
    `customer_id` bigint not null,
    `order_date` datetime not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `customer_id` (`customer_id`),
    index `project_id` (`project_id`),
    constraint `sale_order_ibfk_1` foreign key (`project_id`) references `project_listing` (`id`),
    constraint `sale_order_ibfk_2` foreign key (`customer_id`) references `customer_profile` (`id`)
);

create table if not exists `sale_refund` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `transaction_id` bigint not null,
    `refund_amount` decimal(10, 2) not null,
    `refund_date` datetime not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `transaction_id` (`transaction_id`),
    constraint `sale_refund_ibfk_1` foreign key (`transaction_id`) references `sale_transaction` (`id`)
);

create table if not exists `sale_transaction` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `order_id` bigint not null,
    `amount` decimal(10, 2) not null,
    `transaction_date` datetime not null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `order_id` (`order_id`),
    constraint `sale_transaction_ibfk_1` foreign key (`order_id`) references `sale_order` (`id`)
);

create table if not exists `social_campaign` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `campaign_name` varchar(255) not null,
    `start_date` datetime default null,
    `end_date` datetime default null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `social_campaign_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `social_content` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `creator_id` bigint not null,
    `content_text` text,
    `scheduled_time` datetime default null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`),
    index `creator_id` (`creator_id`),
    constraint `social_content_ibfk_1` foreign key (`creator_id`) references `creator_profile` (`id`)
);

create table if not exists `social_platform` (
    `id` bigint not null auto_increment,
    `uuid` varchar(36) not null,
    `platform_name` varchar(100) not null,
    `api_key` varchar(255) default null,
    `date_created` datetime not null default current_timestamp,
    `date_updated` datetime default null,
    primary key (`id`),
    unique key `uuid` (`uuid`)
);