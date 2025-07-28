import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger" | "success";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    isLoading = false,
    children,
    className = "",
    disabled,
    ...props
}) => {
    const baseClasses =
        "font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
        secondary:
            "bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-500",
        danger: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-500",
        success:
            "bg-green-500 hover:bg-green-600 text-white focus:ring-green-500",
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-3",
        lg: "px-8 py-4 text-lg",
    };

    const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            className={finalClassName}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Загрузка...
                </div>
            ) : (
                children
            )}
        </button>
    );
};
