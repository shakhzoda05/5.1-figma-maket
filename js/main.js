document.body.classList.add("bg-gray-50", "text-gray-800");

const nav = document.createElement("nav");
nav.className = "bg-white shadow-md";
nav.innerHTML = `
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="text-2xl font-semibold">formcarry.</div>
        <div class="space-x-8 text-lg">
            <a href="#" class="hover:text-blue-600">FAQ</a>
            <a href="#" class="hover:text-blue-600">Docs</a>
            <a href="#" class="hover:text-blue-600">Integrations</a>
            <a href="#" class="hover:text-blue-600">Pricing</a>
        </div>
        <div class="space-x-4">
            <a href="#" class="text-gray-600 hover:text-gray-800">Login</a>
            <a href="#" class="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">Sign Up</a>
        </div>
    </div>
`;

const main = document.createElement("main");
main.className = "container mx-auto text-center mt-20";
main.innerHTML = `
    <h1 class="text-blue-600 font-semibold">COLLECT FORM SUBMISSIONS</h1>
    <h2 class="text-5xl font-bold text-gray-900 mt-4">Get emails and messages from your HTML form</h2>
    <p class="text-lg text-gray-600 mt-4">
        Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.
    </p>
    <button class="mt-10 px-6 py-3 bg-blue-900 text-white rounded-full text-lg hover:bg-blue-800">Get Started</button>
`;

const footer = document.createElement("footer");
footer.className = "container mx-auto text-center py-8 mt-20 text-gray-500";
footer.innerHTML = `
    <div class="flex justify-center space-x-4 mb-4">
        <a href="#" class="hover:text-gray-800">Terms of Service</a>
        <a href="#" class="hover:text-gray-800">Privacy Policy</a>
    </div>
    <div class="flex justify-center space-x-4">
        <a href="#" class="hover:text-gray-800"><i class="fab fa-twitter"></i></a>
        <a href="#" class="hover:text-gray-800"><i class="fab fa-facebook"></i></a>
        <a href="#" class="hover:text-gray-800"><i class="fab fa-github"></i></a>
    </div>
    <p class="mt-4">formcarry. all rights reserved</p>
`;

document.body.append(nav, main, footer);
