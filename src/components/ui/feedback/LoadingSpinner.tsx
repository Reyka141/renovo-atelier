import React from "react";

export interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg";
    color?: string;
    className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    size = "md",
    color = "border-blue-600",
    className = "",
}) => {
    const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12",
    };

    return (
        <div
            className={`animate-spin rounded-full border-b-2 ${color} ${sizeClasses[size]} ${className}`}
            role="status"
            aria-label="Загрузка"
        >
            <span className="sr-only">Загрузка...</span>
        </div>
    );
};
